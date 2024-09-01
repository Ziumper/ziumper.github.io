<div class="links">
  <a href="https://github.com/Ziumper/LZSS" class="btn btn-amber btn-sm z-depth-0" role="button">View code <i class="fa-brands fa-github"></i></a>
</div>

# Project Description

The aim of the project was to implement the [LZSS](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Storer%E2%80%93Szymanski) lossless data compression algorithm, optimizing data storage. It also utilizes the [KMP](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) algorithm for searching repeated data sequences and building a dictionary of words and a table of code displacements. The project was carried out during engineering studies as a thesis at the University of Warmia and Mazury in Olsztyn.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/LZSS.jpg" title="agents app gui" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    GUI application screen
</div>

## Features

The following features were implemented as part of the project:

- operations on binary data
- implementation of the KMP algorithm and its integration in the information encoding process
- implementation of an application allowing compression and lossless decompression of data with a convenient graphical interface
- export of compression results to a file with its own data format and header
- ability to download a report with compression results
- compression status bar

## Technologies Used

As part of the project implementation, I became acquainted with the following technologies and tools:

- C++
- WinApi
