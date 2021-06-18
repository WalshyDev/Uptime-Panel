if [ $# -eq 0 ]; then
  echo 'Specify the packaged file'
  exit 1
fi

md5=$(md5sum "$1" | awk '{ print $1 }')
sha1=$(sha1sum "$1" | awk '{ print $1 }')
sha256=$(sha256sum "$1" | awk '{ print $1 }')

echo "**MD5**: \`$md5\`"
echo "**SHA-1**: \`$sha1\`"
echo "**SHA-256**: \`$sha256\`"
