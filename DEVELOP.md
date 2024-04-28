
## Setup dev env

1. Download go

https://go.dev/dl/

2. Install go

```console
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf ~/Downloads/go1.22.2.linux-amd64.tar.gz
```

3. Create kind clister

```console
kind create cluster
```

4. Run backend

```console
cd backend
go run ./cmd/server -c hack/server.yaml
```

5. Run frontend

```console
cd frontend
npm install
npm run dev
```
