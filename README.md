# 🐉 Dragon Ball Web App

Una moderna applicazione web sviluppata con Angular per esplorare l'universo di Dragon Ball. L'app consente agli utenti di navigare tra i personaggi, visualizzare dettagli approfonditi e cercare i loro eroi preferiti.

## 📋 Indice

- [Caratteristiche](#caratteristiche)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Prerequisiti](#prerequisiti)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Struttura del Progetto](#struttura-del-progetto)
- [API](#api)
- [Componenti Principali](#componenti-principali)
- [Build](#build)
- [Test](#test)
- [Contribuire](#contribuire)

## ✨ Caratteristiche

- 📱 **Design Responsive**: Interfaccia ottimizzata per desktop, tablet e mobile
- 🔍 **Ricerca Avanzata**: Sistema di ricerca per trovare rapidamente i personaggi
- 🎨 **Material Design**: UI moderna e accattivante con Angular Material
- 🚀 **Navigazione Fluida**: Routing ottimizzato con Angular Router
- 📊 **Dettagli Completi**: Visualizzazione dettagliata delle informazioni dei personaggi
- ⚡ **Performance**: Caricamento veloce con lazy loading e ottimizzazioni
- 🌐 **API Integration**: Integrazione con Dragon Ball API per dati aggiornati

## 🛠️ Tecnologie Utilizzate

- **Framework**: Angular 13.3.0
- **UI Library**: Angular Material 13.3.9
- **Linguaggio**: TypeScript 4.6.2
- **Styling**: SCSS
- **HTTP Client**: Angular HttpClient
- **Reactive Programming**: RxJS 7.5.0
- **Testing**: Karma & Jasmine
- **Build Tool**: Angular CLI 13.3.11

## 📦 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (versione 12.x o superiore)
- **npm** (versione 6.x o superiore)
- **Angular CLI** (versione 13.3.11)

```bash
npm install -g @angular/cli@13.3.11
```

## 🚀 Installazione

1. **Clona il repository**:

```bash
git clone <url-repository>
cd replica_sito_dragonball/dragonball-app
```

2. **Installa le dipendenze**:

```bash
npm install
```

3. **Avvia il server di sviluppo**:

```bash
ng serve
```

4. **Apri il browser**:
   Naviga su `http://localhost:4200/`

L'applicazione si ricaricherà automaticamente se modifichi i file sorgente.

## 💻 Utilizzo

### Server di Sviluppo

```bash
npm start
# oppure
ng serve
```

### Watch Mode

Per ricompilare automaticamente durante lo sviluppo:

```bash
npm run watch
```

### Build di Produzione

```bash
npm run build
```

I file compilati verranno salvati nella directory `dist/`.

## 📁 Struttura del Progetto

```
dragonball-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/              # Barra di navigazione
│   │   │   ├── character-list/      # Lista personaggi
│   │   │   ├── character-card/      # Card singolo personaggio
│   │   │   ├── character-detail/    # Dettaglio personaggio
│   │   │   ├── character-detail-page/  # Pagina dettaglio completa
│   │   │   ├── search-form-component/  # Form di ricerca
│   │   │   ├── loader/              # Componente loading
│   │   │   └── footer/              # Footer dell'app
│   │   ├── services/
│   │   │   └── dragonball.service.ts  # Servizio API
│   │   ├── app-routing.module.ts    # Configurazione routing
│   │   └── app.module.ts            # Modulo principale
│   ├── assets/                       # Risorse statiche
│   ├── environments/                 # Configurazioni ambiente
│   └── styles.scss                   # Stili globali
├── angular.json                      # Configurazione Angular
├── package.json                      # Dipendenze npm
└── tsconfig.json                     # Configurazione TypeScript
```

## 🌐 API

L'applicazione utilizza la [Dragon Ball API](https://dragonball-api.com/api) per recuperare i dati dei personaggi:

- **Base URL**: `https://dragonball-api.com/api`
- **Endpoints**:
  - `GET /planets` - Lista pianeti
  - `GET /planets/:id` - Dettaglio pianeta
  - `GET /characters` - Lista personaggi (con paginazione)
  - `GET /characters/:id` - Dettaglio personaggio

## 🧩 Componenti Principali

### NavbarComponent

Barra di navigazione principale con logo e menu.

### CharacterListComponent

Visualizza la lista dei personaggi con supporto per paginazione e ricerca.

### CharacterCardComponent

Componente riutilizzabile per mostrare un'anteprima del personaggio.

### CharacterDetailComponent & CharacterDetailPageComponent

Mostra i dettagli completi di un personaggio selezionato.

### SearchFormComponentComponent

Form di ricerca con filtri per trovare personaggi specifici.

### DragonballService

Servizio principale per le chiamate API e la gestione dello stato di ricerca tramite RxJS BehaviorSubject.

## 🔨 Build

### Build di Sviluppo

```bash
ng build
```

### Build di Produzione

```bash
ng build --configuration production
```

I file ottimizzati verranno salvati nella directory `dist/`.

## 🧪 Test

### Unit Test

```bash
npm test
# oppure
ng test
```

Esegue i test unitari tramite Karma e Jasmine.

### Code Scaffolding

Genera nuovi componenti, servizi, ecc.:

```bash
ng generate component component-name
ng generate service service-name
ng generate directive|pipe|guard|interface|enum|module name
```

## 🤝 Contribuire

I contributi sono sempre benvenuti! Per contribuire:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha sul branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è stato creato a scopo educativo.

## 👤 Autore

Creato con ❤️ per gli appassionati di Dragon Ball

## 📞 Supporto

Per domande o supporto, apri una issue nel repository.

---

**Note**: Assicurati di avere una connessione internet attiva per accedere all'API di Dragon Ball.
