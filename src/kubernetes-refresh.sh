kubectl delete pod $(kubectl get pods | grep ntlt-ift | cut -f 1 -d ' ')
kubectl apply -f kubernetes.yml
kubectl rollout status deployment ntlt-ift -w