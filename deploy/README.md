# Deploy su server esterno 

I seguenti file servono ad effetturare un deploy su server privati (vps) o tramite cloud provider che consentono 
di deployare Container. 

## Struttura 

Il container di produzione è costruito in due stage ed espone un reverse proxy (Caddy) per servire staticamente la build di astro. 

### Nota

In caso di utilizzo copiare i file da questa cartella alla root della repo.
