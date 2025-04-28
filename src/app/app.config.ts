import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "examenangular-db543", appId: "1:724386627907:web:c8c05ce4ad12a9fa186ff6", storageBucket: "examenangular-db543.firebasestorage.app", apiKey: "AIzaSyBNSZntnrRGOTqZ72MmfBDxLNI1RRb95bo", authDomain: "examenangular-db543.firebaseapp.com", messagingSenderId: "724386627907" })), provideFirestore(() => getFirestore())]
};
