# PsycheMed IA - Plateforme de Psychiatrie Augmentée

Application professionnelle de psychiatrie destinée aux psychologues et psychiatres en Algérie pour la gestion des patients, l'assistance aux diagnostics via l'IA et le DSM-5, la proposition de traitements et l'amélioration du workflow clinique.

## Technologies utilisées

- **Tauri + React.js** - Pour une application ultra-rapide et native
- **TypeScript** - Pour un code robuste et typé
- **TailwindCSS** - Pour un design propre et moderne
- **Framer Motion** - Pour des animations fluides
- **Recharts** - Pour les visualisations de données

## Fonctionnalités

### Dashboard principal
- Vue synthétique du nombre de patients, suivis actifs, cas urgents
- Alertes cliniques en rouge, accès rapide aux urgences psychiatriques
- Section "Conseil IA du jour"
- Recommandation de lecture DSM-5 ou articles récents

### Gestion complète des patients
- Ajout / modification / suppression
- Fiche patient : photo, sexe, âge, contact, antécédents, statut
- Historique des consultations sous forme de timeline
- Téléversement de documents (PDF, images, etc.)
- Vue en grille ou liste selon préférences

### Symptômes & Diagnostic
- Sélection rapide des symptômes par catégories DSM-5
- Saisie de la durée, intensité, contexte
- Analyse IA avec réponse diagnostique probabiliste (graphique en camembert)
- Diagnostic différentiel via DSM-5 structuré
- Recommandation de tests ou échelles supplémentaires

### Traitements proposés
- Options entre TCC, DBT, ACT, psychodynamique, pharmacologique
- Propositions IA avec pourcentage d'efficacité attendu
- Description détaillée de chaque traitement
- Vue des médicaments associés avec posologies et effets secondaires
- Historique des traitements prescrits

### Autres fonctionnalités
- Mode nuit intégré
- Interface réactive et moderne avec effet verre dépoli
- Animations douces et transitions fluides

## Installation

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run tauri dev

# Construction de l'application
npm run tauri build
```

## Identifiants de démo

- **Utilisateur**: demo
- **Mot de passe**: demo

## Crédits

Développé par Claude pour les professionnels de la santé mentale en Algérie.
