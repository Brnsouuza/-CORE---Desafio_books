Acesso pelo Ngrock, onde serrá gerado um tunel de acesso para deixar o meu localhost público 

Install ngrok via Apt with the following command:

curl -sSL https://ngrok-agent.s3.amazonaws.com/ngrok.asc \
  | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null \
  && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" \
  | sudo tee /etc/apt/sources.list.d/ngrok.list \
  && sudo apt update \
  && sudo apt install ngrok

  Run the following command to add your authtoken to the default ngrok.yml

  ngrok config add-authtoken 2x2ojhDOKivZs1wA6Thj561JlRe_3t5BysVssu75kNnMdSZii

  Adress for access:

  ngrok http http://localhost:8080


  