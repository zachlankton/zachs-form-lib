#!/bin/bash

# Function to process each file
process_file() {
  local file="$1"
  echo "//==========================================================================" >> output.js.txt
  echo "// File: $file" >> output.js.txt
  echo "//==========================================================================" >> output.js.txt
  echo "" >> output.js.txt
  cat "$file" >> output.js.txt
  echo "" >> output.js.txt
  echo "" >> output.js.txt
}

# Function to recursively process files in a directory
process_directory() {
  local directory="$1"
  for file in "$directory"/*.*; do
    if [ -f "$file" ]; then
      process_file "$file"
    fi
  done

  for subdir in "$directory"/*/; do
    if [ -d "$subdir" ]; then
      process_directory "$subdir"
    fi
  done
}

# Check if the folder path is provided as an argument
if [ $# -eq 0 ]; then
  echo "Please provide the folder path as an argument."
  exit 1
fi

# Get the folder path from the argument
folder_path="$1"

# Check if the folder exists
if [ ! -d "$folder_path" ]; then
  echo "The specified folder does not exist."
  exit 1
fi

# Create or clear the output file
echo "" > output.js.txt

# Start processing the files recursively
process_directory "$folder_path"

echo "Contents of all JavaScript files have been concatenated into output.js.txt."