
const courses=[
{id:1,title:"Niveau 1 — Découvrir l'ordinateur",icon:"💻",lessons:[
{title:"1. Qu'est-ce qu'un ordinateur ?",body:`Un ordinateur est une machine qui reçoit des informations, les traite et produit un résultat. Pour débuter, retiens quatre éléments : écran, unité centrale ou ordinateur portable, clavier et souris.<br><br><strong>Exemple :</strong> quand tu écris ton nom au clavier, l'ordinateur reçoit les touches, les traite puis affiche ton nom à l'écran.`,exercise:"Cite trois éléments que tu utilises pour travailler sur un ordinateur.",quiz:[["Quel périphérique sert principalement à écrire ?",["Écran","Clavier","Haut-parleur"],1],["Que fait un ordinateur avec les informations reçues ?",["Il les traite","Il les mange","Il les efface toujours"],0]]},
{title:"2. Fichiers et dossiers",body:`Un <strong>fichier</strong> contient une information : document, photo, PDF, etc. Un <strong>dossier</strong> sert à organiser plusieurs fichiers.<br><br>Pour créer une organisation simple : 1) crée un dossier « Formation » ; 2) à l'intérieur, crée « Cours », « Exercices » et « Documents » ; 3) donne des noms clairs aux fichiers.`,exercise:"Crée un dossier Formation et trois sous-dossiers : Cours, Exercices, Documents.",quiz:[["Quel est le rôle d'un dossier ?",["Organiser des fichiers","Éteindre le PC","Changer le clavier"],0],["Quel nom est le plus clair ?",["document123","CV_Moussa_2026","aaaa"],1]]},
{title:"3. Exercice pratique — organiser son travail",body:`Télécharge ou crée trois fichiers puis range-les correctement. Renomme chaque fichier avec un nom compréhensible. Ensuite, déplace un fichier d'un dossier à un autre et vérifie que tu sais le retrouver.`,exercise:"Crée 3 fichiers, range-les, renomme-les puis retrouve chacun en moins d'une minute.",quiz:[["Avant de supprimer un fichier important, que faut-il faire ?",["Vérifier son contenu","Éteindre l'ordinateur","Changer le fond d'écran"],0],["Une bonne organisation permet de…",["retrouver plus facilement ses documents","ralentir le travail","supprimer les dossiers"],0]]}
]},
{id:2,title:"Niveau 2 — Bureautique",icon:"📄",lessons:[
{title:"1. Word — créer un document",body:`Word sert à créer et mettre en forme des documents. Commence par saisir un texte, puis apprends à sélectionner, copier, couper, coller et mettre en gras. Utilise des titres et des paragraphes pour rendre le document lisible.`,exercise:"Crée une page avec un titre, deux paragraphes et une liste à puces.",quiz:[["Quel raccourci sert généralement à copier ?",["Ctrl+C","Ctrl+Z","Ctrl+P"],0],["Pourquoi utiliser des titres ?",["Pour structurer le document","Pour supprimer le texte","Pour fermer Word"],0]]},
{title:"2. Excel — comprendre un tableau",body:`Excel organise des données dans des cellules. Une formule commence généralement par <strong>=</strong>. Par exemple, <strong>=A1+B1</strong> additionne les deux cellules. Tu peux ensuite utiliser des sommes, moyennes et graphiques.`,exercise:"Crée un tableau de 5 produits avec quantité et prix, puis calcule le total.",quiz:[["Une formule Excel commence généralement par…",["#","=","@"],1],["Quelle fonction calcule une somme ?",["SUM/SOMME","TEXT","OPEN"],0]]},
{title:"3. PowerPoint — présenter une idée",body:`PowerPoint permet de présenter une idée avec des diapositives. Une bonne présentation utilise peu de texte, des titres visibles et des éléments bien alignés.`,exercise:"Crée 4 diapositives : titre, problème, solution, conclusion.",quiz:[["Une diapositive doit être…",["lisible","remplie de texte minuscule","sans titre"],0],["Quel élément aide à structurer une présentation ?",["Les titres","Les fautes","Les doublons"],0]]}
]},
{id:3,title:"Niveau 3 — Internet & sécurité",icon:"🌐",lessons:[
{title:"1. Rechercher efficacement",body:`Un moteur de recherche permet de trouver des informations sur Internet. Pour obtenir de meilleurs résultats, utilise des mots-clés précis. Compare plusieurs sources et vérifie la date et l'auteur quand l'information est importante.`,exercise:"Fais une recherche sur un sujet de ton choix et compare trois résultats.",quiz:[["Que faut-il faire face à une information importante ?",["La vérifier","La partager immédiatement","L'ignorer"],0],["Des mots-clés précis permettent généralement…",["de mieux cibler la recherche","de casser Internet","de supprimer les résultats"],0]]},
{title:"2. E-mail et pièces jointes",body:`Un e-mail permet d'envoyer un message et des fichiers. Avant d'envoyer une pièce jointe, vérifie le destinataire, le nom du fichier et le contenu du message.`,exercise:"Rédige un e-mail professionnel avec objet, formule de politesse et pièce jointe fictive.",quiz:[["L'objet d'un e-mail sert à…",["résumer le sujet","cacher le destinataire","éteindre le PC"],0],["Avant d'envoyer, il faut vérifier…",["destinataire et pièce jointe","la météo","le fond d'écran"],0]]},
{title:"3. Sécurité numérique",body:`Utilise des mots de passe longs et uniques, active la double authentification quand elle est disponible et méfie-toi des liens urgents ou des demandes d'argent. Ne communique jamais tes codes de connexion à quelqu'un.`,exercise:"Analyse un faux message de phishing et liste au moins trois signes suspects.",quiz:[["Un mot de passe réutilisé partout est…",["plus risqué","toujours recommandé","obligatoire"],0],["Une demande urgente de code par message est…",["un signal d'alerte","toujours normale","une preuve d'identité"],0]]}
]},
{id:4,title:"Niveau 4 — Premiers pas sur le Web",icon:"🧩",lessons:[
{title:"1. HTML — structure d'une page",body:`HTML décrit la structure d'une page web. Les balises indiquent les éléments : titre, paragraphe, image, lien, etc.`,exercise:"Écris une page contenant un titre, un paragraphe et un lien.",quiz:[["HTML sert principalement à…",["structurer une page","calculer des salaires","envoyer des SMS"],0],["Quel élément représente un paragraphe ?",["p","img","table"],0]]},
{title:"2. CSS — rendre la page agréable",body:`CSS sert à modifier l'apparence : couleurs, tailles, espacements, alignement et mise en page. HTML donne la structure ; CSS travaille sur le style.`,exercise:"Ajoute une couleur de fond, une taille de titre et des espacements à ta page.",quiz:[["CSS sert principalement à…",["styler une page","créer un compte bancaire","scanner un ordinateur"],0],["HTML + CSS permettent de créer…",["une page web","un clavier","un câble"],0]]},
{title:"3. Mini-projet web",body:`Construis une petite page de présentation : nom du projet, courte description, services ou compétences, contact. Vérifie la lisibilité sur téléphone et ordinateur.`,exercise:"Crée ta première page de présentation et demande à une personne de la tester.",quiz:[["Avant de publier un site, il est utile de…",["le tester","supprimer le contenu","cacher les liens"],0],["Une page mobile doit être…",["adaptée aux petits écrans","illisible","plus large que l'écran"],0]]}
]},
{id:5,title:"Niveau 5 — Compétences professionnelles",icon:"🚀",lessons:[
{title:"1. CV professionnel",body:`Un CV doit présenter clairement ton identité professionnelle, tes compétences, ta formation et tes expériences. Utilise une structure simple et vérifie l'orthographe.`,exercise:"Prépare un CV d'une page avec tes informations professionnelles.",quiz:[["Un bon CV doit être…",["clair et lisible","très confus","sans coordonnées"],0],["Avant d'envoyer un CV, il faut…",["relire","supprimer son nom","ajouter des fautes"],0]]},
{title:"2. Communication numérique",body:`Une communication professionnelle est claire, respectueuse et adaptée au destinataire. Dans un message professionnel, indique le contexte et ce que tu demandes précisément.`,exercise:"Rédige un message professionnel pour demander un rendez-vous.",quiz:[["Un message professionnel doit être…",["clair","agressif","sans contexte"],0],["Que faut-il éviter ?",["les insultes","la précision","la politesse"],0]]},
{title:"3. Projet final",body:`Ton projet final rassemble les compétences apprises. Choisis un objectif concret : document professionnel, tableau Excel, présentation ou petite page web. Présente ton travail, explique les étapes et corrige les erreurs.`,exercise:"Réalise un projet final et prépare une courte présentation de ton travail.",quiz:[["Le projet final sert à…",["mettre en pratique les acquis","éviter les exercices","supprimer la progression"],0],["Après un projet, il est utile de…",["tester et améliorer","ne rien vérifier","effacer le projet"],0]]}
]}
];

let state=JSON.parse(localStorage.getItem('ndourState')||'{"user":null,"done":[],"scores":{}}');
function save(){localStorage.setItem('ndourState',JSON.stringify(state))}
function pages(){document.querySelectorAll('.page').forEach(x=>x.classList.add('hidden'))}
function showPage(id){
 pages();
 document.getElementById(id).classList.remove('hidden');
 if(id==='courses')renderCourses();
 if(id==='student'){renderStudent();studentTab('dashboard')}
 if(id==='admin')renderAdmin();
 window.scrollTo({top:0,behavior:'smooth'});
}
function renderCourses(){
 const el=document.getElementById('courseList'); el.innerHTML='';
 courses.forEach(c=>{
 const done=c.lessons.filter((_,i)=>state.done.includes(c.id+'-'+i)).length;
 const pct=Math.round(done/c.lessons.length*100);
 el.innerHTML+=`<div class="card"><div class="icon">${c.icon}</div><h3>${c.title}</h3><p>${c.lessons.length} leçons • progression ${pct}%</p><div class="progress"><span style="width:${pct}%"></span></div><br><button class="btn btn-primary" onclick="openCourse(${c.id})">Ouvrir</button></div>`;
 });
}
function openCourse(id){showPage('lessonPage');const c=courses.find(x=>x.id===id);let h=`<div style="margin:25px 0"><span class="eyebrow">${c.icon} PARCOURS</span><h2>${c.title}</h2><p style="color:#64748b">Lis la leçon, réalise l'exercice, puis valide.</p></div>`;
 c.lessons.forEach((l,i)=>{const key=c.id+'-'+i;const done=state.done.includes(key);h+=`<article class="lesson"><div class="lesson-head"><h3>${l.title}</h3><span class="tag">${done?'✓ Terminé':'À faire'}</span></div><div style="line-height:1.7;color:#334155">${l.body}</div><div class="card" style="margin-top:15px;background:#f8fafc"><strong>📝 Exercice pratique</strong><p>${l.exercise}</p></div><button class="btn ${done?'btn-soft':'btn-primary'}" onclick="toggleDone('${key}',${id})">${done?'Marquer comme non terminé':'Valider la leçon'}</button></article>`});
 document.getElementById('lessonContent').innerHTML=h;
}
function toggleDone(key,id){if(state.done.includes(key))state.done=state.done.filter(x=>x!==key);else state.done.push(key);save();openCourse(id)}
function login(){const n=document.getElementById('loginName').value.trim();const e=document.getElementById('loginEmail').value.trim();if(!n||!e){alert('Merci de remplir le nom et l’e-mail.');return}state.user={name:n,email:e};save();showPage('student')}
function logout(){state.user=null;save();showPage('home')}
function renderStudent(){document.getElementById('welcome').textContent='Bonjour '+(state.user?.name||'étudiant')+' 👋'}
function studentTab(tab,btn){
 document.querySelectorAll('.side button').forEach(b=>b.classList.remove('active')); if(btn)btn.classList.add('active');
 const el=document.getElementById('studentContent');
 const total=courses.reduce((s,c)=>s+c.lessons.length,0), done=state.done.length, pct=Math.round(done/total*100);
 if(tab==='dashboard')el.innerHTML=`<div class="statgrid"><div class="stat"><span>Leçons terminées</span><strong>${done}</strong></div><div class="stat"><span>Progression</span><strong>${pct}%</strong></div><div class="stat"><span>Quiz validés</span><strong>${Object.keys(state.scores).length}</strong></div></div><div class="card" style="margin-top:18px"><h3>Progression générale</h3><div class="progress"><span style="width:${pct}%"></span></div><p>${pct===100?'Félicitations, parcours terminé !':'Continue régulièrement pour avancer.'}</p></div>`;
 if(tab==='lessons')el.innerHTML=courses.map(c=>`<div class="lesson"><div class="lesson-head"><h3>${c.icon} ${c.title}</h3><button class="btn btn-soft" onclick="openCourse(${c.id})">Continuer</button></div><p>${c.lessons.length} leçons</p></div>`).join('');
 if(tab==='quiz')renderQuiz(el);
 if(tab==='certificate'){const ready=pct===100;el.innerHTML=`<div class="card"><h3>🏆 Certificat de fin de parcours</h3><p>${ready?'Ton parcours est terminé. Tu peux générer ton certificat.':'Termine toutes les leçons pour débloquer le certificat.'}</p><button class="btn ${ready?'btn-primary':'btn-soft'}" ${ready?'onclick="certificate()" disabled':''}>${ready?'Générer le certificat':'Certificat verrouillé'}</button></div>`}
}
function renderQuiz(el){
 let html='<div class="card"><h3>🧠 Quiz de révision</h3><p>Choisis un module puis réponds aux questions.</p>';
 courses.forEach(c=>html+=`<button class="btn btn-soft" style="margin:5px" onclick="startQuiz(${c.id})">${c.icon} ${c.title}</button>`); html+='</div>';el.innerHTML=html;
}
function startQuiz(id){
 const c=courses.find(x=>x.id===id), qs=c.lessons.flatMap(l=>l.quiz.map(q=>({q:q[0],opts:q[1],ans:q[2]}))).slice(0,6);
 let h=`<div class="card"><h3>Quiz — ${c.title}</h3><form id="quizForm">`;
 qs.forEach((q,i)=>{h+=`<div class="quiz-q"><strong>${i+1}. ${q.q}</strong>${q.opts.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}</div>`});
 h+=`<button class="btn btn-primary">Corriger le quiz</button></form><div id="quizResult"></div></div>`; document.getElementById('studentContent').innerHTML=h;
 document.getElementById('quizForm').onsubmit=e=>{e.preventDefault();let score=0;qs.forEach((q,i)=>{if(Number(new FormData(e.target).get('q'+i))===q.ans)score++});state.scores[id]=score+'/'+qs.length;save();document.getElementById('quizResult').innerHTML=`<div class="card" style="margin-top:15px"><h3>Résultat : ${score}/${qs.length}</h3><p>${score>=Math.ceil(qs.length*.7)?'Bravo, quiz validé !':'Relis les leçons et réessaie.'}</p></div>`}
}
function certificate(){const w=window.open('','_blank');w.document.write(`<html><head><title>Certificat NDOUR TERANGA</title><style>body{font-family:Arial;text-align:center;padding:70px} .box{border:8px solid #2563eb;padding:60px}h1{font-size:46px}h2{font-size:32px}p{font-size:18px}</style></head><body><div class="box"><h1>NDOUR TERANGA</h1><h2>CERTIFICAT DE FORMATION</h2><p>Ce certificat est décerné à</p><h2>${state.user?.name||'Étudiant'}</h2><p>pour avoir terminé le parcours de formation numérique.</p><p>${new Date().toLocaleDateString('fr-FR')}</p><button onclick="window.print()">Imprimer / Enregistrer en PDF</button></div></body></html>`);w.document.close()}
function renderAdmin(){document.getElementById('adminContent').innerHTML=`<div class="grid"><div class="card"><h3>📚 Formations</h3><strong>${courses.length}</strong><p>Parcours intégrés.</p></div><div class="card"><h3>📝 Leçons</h3><strong>${courses.reduce((s,c)=>s+c.lessons.length,0)}</strong><p>Leçons prêtes à être suivies.</p></div><div class="card"><h3>🧠 Quiz</h3><strong>${courses.reduce((s,c)=>s+c.lessons.reduce((a,l)=>a+l.quiz.length,0),0)}</strong><p>Questions avec correction.</p></div></div><div class="card" style="margin-top:18px"><h3>Étudiant actuel</h3><p>${state.user?state.user.name+' — '+state.user.email:'Aucun étudiant connecté'}</p></div>`}
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
showPage('home');
