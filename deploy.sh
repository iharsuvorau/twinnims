#!/bin/bash

hugo
rsync -avz public/ twinnims@twinnims.eu:~/public_html/
