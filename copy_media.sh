#!/bin/bash

# Source and destination directories
SRC_DIR="../portfolio-next/public"
DEST_DIR="./public"

# Create public directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Copy all images (jpg, jpeg, png) and mp4 files
cp "$SRC_DIR"/*.{jpg,jpeg,png,mp4,pdf} "$DEST_DIR" 2>/dev/null || {
    echo "Some files not found, but continuing..."
}

# List copied files
echo "Copied files:"
ls -lh "$DEST_DIR"