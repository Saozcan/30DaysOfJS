


//body style
	document.body.style.backgroundColor = '#EDEAE5'
	document.body.style.fontFamily  = 'system-ui'

//tags
	const firstTag = document.createElement('div')
	const secTag = document.createElement('div')
	const innerTag = document.createElement('div')
	const spanTag = document.createElement('span')

//tags append to body
	document.body.appendChild(firstTag)
	firstTag.appendChild(secTag)
	firstTag.appendChild(innerTag)
	//firstTag.appendChild(spanTag)

//texts of tags
	secTag.innerHTML = 'Press any keyboard key'

//first tag style
	//firstTag.style.margin = '300px 35% 300px'
	firstTag.style.display = 'inline'

//secTag style
	secTag.style.display = 'flex'
	secTag.style.justifyContent = 'center'
	secTag.style.alignItems = 'center'
	secTag.style.backgroundColor = '#EDEAE5'
	secTag.style.margin = '300px 33% 0'
	secTag.style.width = '390px'
	//secTag.style.border = '2px solid'
	//secTag.style.borderColor = 'black'
	secTag.style.boxShadow = '5px 10px 20px #888888 inset'
	secTag.style.padding = '20px'
	secTag.style.fontSize = '30px'
	secTag.style.fontWeight = 'bold'

//outset border
	document.addEventListener('keydown', e => {
		//console.log(e)
		innerTag.innerHTML = `${e.keyCode}`
		secTag.innerHTML = `Press any keyboard key ${e.key}`
		spanTag.innerHTML = e.key
		console.log(spanTag)
		//spanTag.style.display = 'inline-block'
		spanTag.style.color = 'green'
		console.log(spanTag.innerHTML)
		innerTag.style.textAlign = 'center'
		innerTag.style.padding = '20px 20px'
		innerTag.style.margin = '2% 37%' 
		innerTag.style.borderStyle = 'outset'
		innerTag.style.fontSize = '55px'
		innerTag.style.color = 'green'
		innerTag.style.fontWeight = 'bold'
	})














































