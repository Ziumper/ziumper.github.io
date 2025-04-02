---
layout: post
title: "Funkcje tablicowe: inicjalizacja tablicy przy pomocy [...] lub array()? - Przegląd PHP #2"
date: 2025-03-24
tags: php
description: "Czy deklarowanie tablicy za pomocą słowa array() idzie na śmietnik historii? Co ma wspólnego pieczenie placka z kompilacją kodu?"
thumbnail: assets/img/posts/cake-1326881.jpg
giscus_comments: true
---
Jest to kolejna seria z cyklu PHP review. Tym razem postanowłem przyjrzeć się trochę bliżej funkcji deklarującej array i co się za nią tak naprawdę kryje. 
Z tego co pamiętam zapis `array()` przez moich kolegów z pracy uznawany był za zażyłość i nie powinno się już go używać.
Aby się o tym przekonać postanowiłem zaciągnąć repozytorium frameworka do refaktoryzacji i aktualizacji kodu PHP, czyli Rectora. No, bo jakie narzędzie
najlepiej operuje na tablicach jak nie narzędzie do jego refaktoryzacji i będzie trzymać się najlepszych praktyk tworzenia i pisania kodu?

## Kolejne głębokie zanurzenie w płycizne

Ku mojemu zdziwieniu nie znalazłem zbyt dużo przykładów. Nawiasem mówiąc jedynym przykładem, który rzeczywiście została użyta funkcja `array()` albo raczej jej dokumentacja, żeby jej nie używać :-). w frameworku Rector, była złota zasada dla [LongArrayToShortArray](https://github.com/rectorphp/rector/blob/59ca5ad3cdd75183ef65f6929693903f2f2a1717/rules/Php54/Rector/Array_/LongArrayToShortArrayRector.php#L30)

```php
public function getRuleDefinition() : RuleDefinition
    {
        return new RuleDefinition('Long array to short array', [new CodeSample(<<<'CODE_SAMPLE'
class SomeClass
{
    public function run()
    {
        return array();
    }
}
CODE_SAMPLE
, <<<'CODE_SAMPLE'
class SomeClass
{
    public function run()
    {
        return [];
    }
}
CODE_SAMPLE
)]);
```

To daje do myślenia. Zważając na to, że metoda klasy `LongArrayToShortArrayRector.php` została umieszczona w pakiecie `Php54`. W wersji **PHP5.4** został dodany krótki operator tablicowy. Od tamej pory poleca się używać, krótszej wersji zapisu tablicy.  

To nadal nie odpowiada do końca na pytanie, jaka jest zasadnicza różnica pomiędzy wywołaniem `array()` a `[ ]`. A wiec co naprawdę dzieje się za kulisami? W momencie odpaleniu skryptu PHP trzeba najpierw upiec placek... aby upiec placek trzeba:
<figure>
<iframe src="https://www.youtube.com/embed/oVSGrY4DfUg" class="rounded z-depth-1" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" width="100%" height="500px"></iframe>
</figure>

## Stworzyć Abstract Syntax Tree, czyli placek
Tak naprawdę wystarczy zrozumieć AST - Abstract Syntax Tree. Jest to struktura drzewiasta, która jest konieczna, aby oddzielić proces kompilacji od parsera. 
[Lexer](https://en.wikipedia.org/wiki/Lexical_analysis) zwraca tokeny, które później są przetwarzane przez parser zwracający strukturę ast, która później przechodzi kompilacje
i na świat przychodzi "placek" w postaci kodów opcode umieszczonych w opcache, a one
później mogą zostać zrozumiane przez komputer jako ciąg wykonywalnych instrukcji.
Aby dowiedzieć się więcej na ten temat polecam obejrzeć poniższy materiał video:

> [Climbing the Abstract Syntax Tree - James Titcumb - Forum PHP 2017](https://www.youtube.com/watch?v=MWITYIWyowk)


## No dobra, gdzie w takim razie występuje różnica pomiędzy `[]` a `array()`? 

Pierwsza różnica, którą zauważyłem była w [kompilatorze](https://github.com/php/php-src/blob/master/Zend/zend_compile.h#L1044).
Można łatwo zauważyć, że zapis został oddzielony na składnią długą oraz krótką. 
```
#define ZEND_ARRAY_SYNTAX_LIST 1  /* list() */
#define ZEND_ARRAY_SYNTAX_LONG 2  /* array() */
#define ZEND_ARRAY_SYNTAX_SHORT 3 /* [] */
```
oraz w przypadku walidacji przypisania
```c
static void zend_verify_list_assign_target(zend_ast *var_ast, zend_ast_attr array_style) {
	if (var_ast->kind == ZEND_AST_ARRAY) {
		if (var_ast->attr == ZEND_ARRAY_SYNTAX_LONG) {
			zend_error_noreturn(E_COMPILE_ERROR, "Cannot assign to array(), use [] instead");
		}
		if (array_style != var_ast->attr) {
			zend_error_noreturn(E_COMPILE_ERROR, "Cannot mix [] and list()");
		}
	} else if (!zend_can_write_to_variable(var_ast)) {
		zend_error_noreturn(E_COMPILE_ERROR, "Assignments can only happen to writable values");
	}
}
```
W kodzie php ma to następujące konsekwencje:
```php
array(1, 2, 3) = [4, 5, 6];  // Błąd: nie można przypisać do array()
[1, 2, 3] = [4, 5, 6];  // Poprawne
```
Szczerze, nie spodziewałem się spotkać takich kruczków w kompilatorze, ale jest to pewna znacząca różnica.

Kolejna różnica jest widoczna w tak zwanym [Lexerze](https://en.wikipedia.org/wiki/Lexical_analysis).
w pliku [language_scanner.l](https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1764C1-L1766C2)
```lexer
<ST_IN_SCRIPTING>"array" {
	RETURN_TOKEN_WITH_IDENT(T_ARRAY);
}

<ST_IN_SCRIPTING>"["|"(" {
	enter_nesting(yytext[0]);
	RETURN_TOKEN(yytext[0]);
}

<ST_IN_SCRIPTING>"]"|")" {
	/* Check that ] and ) match up properly with a preceding [ or ( */
	RETURN_EXIT_NESTING_TOKEN(yytext[0]);
}

```

## Jakie wnioski można wysunąć? 
- W przypadku `[]` lexer musi zwrócić dwa tokeny, a parser potem łączy je w odpowiednią strukturę. To wymaga więcej pracy w fazie tokenizacji i parsowania w porównaniu do `array()`, 
gdzie lexer zwraca gotowy token `T_ARRAY`, a parser tylko przetwarza go jako jedno wyrażenie. Musi wykonać dodatkowe kroki, aby sprawdzić, czy to tablica, analizując dokładniej.
Zatem w przypadku `[]` parser musi dłużej analizować kod. Gdyż zczytywanie struktur AST odbywa się znak po znaku, w odwróconej [notacji polskiej](https://en.wikipedia.org/wiki/Reverse_Polish_notation).  
- Wersja PHP bez opcache wymaga każdorazowego przetwarzania kodu w czasie wykonywania. Oznacza to, że każde wywołanie kodu w PHP, zarówno array(), jak i [], wymaga zwrócenia się do lexera i parsera w celu wygenerowania AST i opcodów.
- Dłuższy czas parsowania dla []: Ponieważ [] wymaga dodatkowej analizy przez parsera (musi rozpoznać nawiasy), przetwarzanie zajmuje więcej czasu.
- Krótszy czas dla array(): Token `T_ARRAY jest prostszy do rozpoznania i parser nie musi przeprowadzać dodatkowej analizy składniowej. Proces parsowania jest szybszy dla T_ARRAY, ale tylko, gdy nie używa się opcache. 

No i kto by pomyślał, żeby określić, jaka jest prawdziwa różnica pomiędzy `[ ]` i `array()` będę zmuszony wgłębić się aż tak bardzo w php. 
Wydaje się, że nadal wywołanie funkcji `array()` może mieć pewne zastosowania. 
- kiedy za każdym kompiluje się kod bez dostępu do pamięci tymczasowej opcache, co jest raczej rzadkością.
- funkcja `eval()` w której oppcache nie jest wykorzystywany. 

## Ważne Linki

- [The PHP Interpreter](https://github.com/php/php-src/tree/master)
- [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
- [OpCache Preloading](https://www.php.net/manual/en/opcache.preloading.php)
