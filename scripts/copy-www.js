// Copie la version "stores" du jeu (../www) dans le projet Capacitor (./www)
const fs=require('fs'),path=require('path');
const src=path.join(__dirname,'..','..','www'),dst=path.join(__dirname,'..','www');
if(!fs.existsSync(path.join(src,'index.html'))){console.error('Introuvable : '+src+'/index.html');process.exit(1);}
fs.rmSync(dst,{recursive:true,force:true});fs.cpSync(src,dst,{recursive:true});
console.log('www copié ->',dst);
