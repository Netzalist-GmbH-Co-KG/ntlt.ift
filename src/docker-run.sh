docker stop ift
docker rm ift
docker run -d -p 80:80 --name ift ntlt/ntlt.ift
