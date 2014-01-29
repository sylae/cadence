#!/bin/bash

echo "Configuring cadence"

./configure \
  --https \
  --domain="calref.net" \
  --session-auth="https://calref.net/xmpp-auth.php" \
  --logo="img/CalRef2.png" \
  --chatbot="Ligrev" \
  --title="Ligrev's Lounge"

echo "Building cadence"

make > /dev/null
