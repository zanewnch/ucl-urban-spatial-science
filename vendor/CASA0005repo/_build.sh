#!/bin/sh

set -ev

Rscript -e "bookdown::render_book('index.Rmd', 'bookdown::gitbook')"
Rscript scripts/organize_bookdown_output.R
#Rscript -e "bookdown::render_book('index.Rmd', 'bookdown::pdf_book')"
#Rscript -e "bookdown::render_book('index.Rmd', 'bookdown::epub_book')"
