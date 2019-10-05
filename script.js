const page = {
	items: [
		{
			name: "Temperatura",
			icon: "fas fa-thermometer-empty"
		},
		{
			name: "Pressione",
			icon: "fas fa-tachometer-alt"
		},
		{
			name: "Potenza",
			icon: "fas fa-bolt"
		},
		{
			name: "Umidità",
			icon: "fas fa-water"
		}
	],
	cards: [
		{
			bg: "bg-forecast.jpg",
			title: "Previsioni",
			description: "Applica le tecniche di previsione dei guasti."
		},
		{
			bg: "bg-time.jpg",
			title: "Storico",
			description: "Visualizza lo storico dei dati per questa tipologia."
		},
		{
			bg: "bg-last.jpg",
			title: "Ultimo Periodo",
			description: "Visualizza i dati raccolti nell'ultimo periodo."
		}
	],
	drawerToggle: null,
	
	getDrawerToggle: () => {
		if (page.drawerToggle === null)
		{
			page.drawerToggle = document.querySelector(".mdl-layout.has-drawer > .mdl-layout__drawer-button");
		}
		return page.drawerToggle;
	},
	
	scroll: (o) => {
		const toggle = page.getDrawerToggle();
		toggle.style.color = o.scrollTop > toggle.offsetHeight / 2 ? "black" : "white";
	},
	
	fillDrawer: () => {
		const parent = document.querySelector(".side-menu");
		page.items.forEach((e, index) => {
			// Create anchor
			const div = document.createElement("DIV");
			div.setAttribute("class", "mdl-navigation__link");
			div.setAttribute("href", "javascript:void(0)"); // Avoid following hyperlink
			parent.appendChild(div);
			
			// Create icon on left side
			{
				const i = document.createElement("I");
				i.setAttribute("class", e.icon);
				div.appendChild(i);
			}
			
			// Selectable checkbox with label
			{
				const id = "cb" + Math.round(Math.random() * 100000);
				
				const label = document.createElement("LABEL");
				label.setAttribute("class", "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect");
				label.setAttribute("for", id);
				div.appendChild(label);
				
				const input = document.createElement("INPUT");
				input.setAttribute("class", "mdl-checkbox__input");
				input.setAttribute("type", "checkbox");
				input.setAttribute("id", id);
				label.appendChild(input);
				
				const span = document.createElement("SPAN");
				span.setAttribute("class", "mdl-checkbox__label");
				span.innerHTML = e.name;
				label.appendChild(span);

			}
		});
		
		// Update the DOM
		componentHandler.upgradeDom();
	},
	
	load: (index) => {
		// Clear content
		const parent = document.getElementById("frame-content");
		while (parent.firstChild !== null)
		{
			parent.removeChild(parent.firstChild);
		}
		
		// Display cards
		{
			const container = document.createElement("DIV");
			container.setAttribute("class", "spacer side");
			parent.appendChild(container);
			
			for (let i = 0; i < page.cards.length; ++i)
			{
				if (i)
				{
					container.appendChild(document.createTextNode(" "));
				}
			
				const card = components.getCard(page.cards[i].title, page.cards[i].description);
				card.classList.add("chart-card");
				card.onclick = () => {
					page.clickCard(card);
				};
				container.appendChild(card);
				
				const bg = card.querySelector(".mdl-card__title");
				bg.style.backgroundImage = "url(res/" + page.cards[i].bg + ")";
			}
			
			const span = document.createElement("SPAN");
			container.appendChild(span);
		}
		
		// Separator
		{
			parent.appendChild(document.createElement("HR"));
		}
		
		// Chart
		{
			const container = document.createElement("DIV");
			container.setAttribute("class", "side");
			container.style.overflowX = "auto";
			container.style.height = "384px";
			parent.appendChild(container);
			
			const canvas = document.createElement("CANVAS");
			canvas.setAttribute("width", "10000");
			canvas.setAttribute("height", "384");
			canvas.style.height = "100%";
			container.appendChild(canvas);
			
			var myChart = new Chart(canvas, {
				type: 'bar',
				data: {
					labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
					datasets: [{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			});
		}
	},
	
	clickCard: (o) => {
		const vars = document.querySelectorAll(".side-menu input[type=checkbox]:checked");
		if (!vars.length)
		{
			dialog.show("Avviso", "Devi selezionare almeno una variabile!", dialog.acceptAction);
			return;
		}
	}
};

const dialog = {
	element: null,
	acceptAction: {
		"OK": () => {
			dialog.hide();
		}
	},
	
	get: () => {
		if (dialog.element === null)
		{
			dialog.element = document.querySelector("dialog");
		}
		return dialog.element;
	},
	
	show: (title, content, actions) => {
		const d = dialog.get();
		
		d.querySelector(".mdl-dialog__title").innerHTML = title;
		d.querySelector(".mdl-dialog__content").innerHTML = content;
		
		const buttons = d.querySelector(".mdl-dialog__actions");
		
		while (buttons.firstChild !== null)
		{
			buttons.removeChild(buttons.firstChild);
		}
		
		Object.keys(actions).forEach((k, i) => {
			const b = document.createElement("BUTTON");
			b.setAttribute("class", "mdl-button");
			b.setAttribute("type", "button");
			b.onclick = actions[k];
			b.innerHTML = k;
			buttons.appendChild(b);
		});
		
		d.showModal();
	},
	
	hide: () => {
		dialog.get().close();
	}
};

const components = {
	getCard: (title, description) => {
		const card = document.getElementById("dummy-card").cloneNode(true);
		card.querySelector(".mdl-card__title-text").innerHTML = title;
		card.querySelector(".mdl-card__supporting-text").innerHTML = description;
		card.removeAttribute("id");
		card.removeAttribute("id");
		return card;
	}
};