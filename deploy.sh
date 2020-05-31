#!/bin/bash

hugo
rsync -avz --omit-dir-times public/ twinnims@twinnims.eu:~/public_html/
