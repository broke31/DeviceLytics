<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Cruscotto</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-light_blue.min.css">
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
		<link rel="stylesheet" href="res/style.css">
		<link rel="shortcut icon" type="image/png" href="favicon.png"/>
	</head>
	<body onload="page.load(-1)">
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
			<div class="mdl-layout__drawer">
				<span class="mdl-layout-title">Pannello</span>
				<nav class="mdl-navigation side-nav">
					<div class="smaller">
						<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-focused">
							<select class="mdl-textfield__input" type="text" id="programs">
								<option value="-1">---</option>
							</select>
							<label class="mdl-textfield__label" for="programs">Program &amp; Position</label>
						</div>
					</div>
					<div class="side-menu"></div>
				</nav>
			</div>
			<main class="mdl-layout__content" onscroll="page.scroll(this)">
				<div class="page-content">
					<header class="mdl-layout__header" style="display: flex !important">
						<div class="mdl-layout__header-row">
							<span class="mdl-layout-title">
								Visualizza Andamento
							</span>
							<div class="mdl-layout-spacer"></div>
						</div>
					</header>
					<div id="frame-content"></div>
				</div>
				<footer class="mdl-mini-footer">
					<div class="mdl-mini-footer__left-section">
						<div class="mdl-logo">Ti &egrave; piaciuta questa applicazione?</div>
						<ul class="mdl-mini-footer__link-list">
							<li><a href="#">Aiuto</a></li>
						</ul>
					</div>
				</footer>
			</main>
		</div>
		<div style="display: none">
			<div id="dummy-card" class="mdl-card mdl-shadow--2dp">
				<div class="mdl-card__title mdl-card--expand">
					<h2 class="mdl-card__title-text">Title</h2>
				</div>
				<div class="mdl-card__supporting-text">Description</div>
			</div>
		</div>
		<dialog class="mdl-dialog">
			<h4 class="mdl-dialog__title">Title</h4>
			<div class="mdl-dialog__content">Content</div>
			<div class="mdl-dialog__actions"></div>
		</dialog>
		<div style="display: none">
			<form id="predict_form">
				<h5>Addrestra Modello</h5>
				<div>
					Qui puoi caricare il tuo file in formato CSV, in modo tale da addestrare il
					modello che consente di effettuare le predizioni sui dati attuali e futuri.
				</div>
				<div style="margin-top: 16px">
					<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Carica File</button>
				</div>
				<input type="file" style="display: none">
				<hr style="margin-top: 32px">
				<h5>Predici Risultato</h5>
				<div>
					Qui puoi caricare il tuo file in formato CSV, senza la variabile target,
					modo tale che il modello di predizione lo dia in output. � possibile
					utilizzare questa funzione anche per testare il modello.
				</div>
				<div style="margin-top: 16px">
					<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Carica File</button>
				</div>
				<input type="file" style="display: none">
			</form>
		</div>
		<script async defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
		<script async defer src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
		<script async defer src="res/script.js"></script>
	</body>
</html>