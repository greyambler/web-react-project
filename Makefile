# docker build -t work1:t1 . - создать имидж с именем test1 и tag t1

# make run - запуск команды с именем run
#  run: # режим запуска с файлом .evn переопределения внутреннего порта с 4000 на 4400
# 	docker run -d -p 3000:3000 --rm --name con test1:t1
# run-dev: # режим разработки
#  docker run -d -p 3000:3000 -v "D:\MyProjects\Dockers\logs-app:/app" -v /app/node_modules --rm --name=con test:t1
# runVol: # volume для data
# 	docker run -d -p 3000:3000 -v logs:/app/data --env-file ./config/.env --rm --name=con test:t1
stop:
	docker stop con
runt: 	
	docker run -d -p 5000:3030 -v /app/node_modules --rm --name=con test1:t1


