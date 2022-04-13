echo 'Running mode: ' "$1"

if [ "$1" = "dev" ]; then
    docker_compose_file_path="docker-compose.dev.yml"
elif [ "$1" = "deploy" ]; then
    docker_compose_file_path="docker-compose.deploy.yml"
else
    echo "Usage: run.sh [dev|deploy]"
fi

docker-compose -f $docker_compose_file_path up -d --build
docker-compose -f $docker_compose_file_path up