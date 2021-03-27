let credits = 0
let click = 1
let clickUpgrade = {
    blaster: {
        price: 50,
        quantity: 0,
        multiplier: 2
    },
    xwing: {
        price: 500,
        quantity: 0,
        multiplier: 10
    },
    lightsaber: {
        price: 10000,
        quantity: 0,
        multiplier: 25,
    },
    milleniumfalcon: {
        price: 100000,
        quantity: 0,
        multiplier: 100,
    }
}

let autoUpgrade = {
    r2d2: {
        price: 500,
        quantity: 0,
        clicks: 50
    },
    c3p0: {
        price: 2000,
        quantity: 0,
        clicks: 200
    },
    crew: {
        price: 50000,
        quantity: 0,
        clicks: 5000,
    }
}

function mine() {
    credits += click
    update()
    return credits
}

function update() {
    let counter = document.getElementById('money')
    counter.innerHTML = `<p>Imperial Credits: ${credits}</p>`
}

function buy(btn) {
    let selection = clickUpgrade[btn]
    if (credits < selection.price) {
        return alert('You don\'t have enough credits!')
    }
    if (credits >= selection.price && btn == 'blaster') {
        if (selection.quantity > 2) { return alert('You already have 2 blasters!') }
        click *= selection.multiplier
        credits -= selection.price
        selection.quantity.value++
    } else if (credits >= selection.price && btn == 'xwing') {
        if (selection.quantity > 5) { return alert('You already have enough X Wings!') }
        click *= selection.multiplier
        credits -= selection.price
        selection.quantity++
    } else if (credits >= selection.price && btn == 'lightsaber') {
        if (selection.quantity > 5) { return alert('You already have enough Light Sabers!') }
        click *= selection.multiplier
        credits -= selection.price
        selection.quantity++
    } else if (credits >= selection.price && btn == 'milleniumfalcon') {
        if (selection.quantity > 10) { return alert('You already have enough Millenium Falcons!') }
        click *= selection.multiplier
        credits -= selection.price
        selection.quantity++
    }
    update()
}

function buyAuto(btn) {
    let selection = autoUpgrade[btn]
    if (credits < selection.price) {
        return alert('You don\'t have enought credits!')
    }
    if (btn == 'r2d2' && credits >= selection.price) {
        if (autoUpgrade[btn].quantity > 2) { return alert('You already have 2 R2 Units!') }
        autoUpgrade[btn].quantity++
        credits -= selection.price
        interval()
        update()
    } else if (btn == 'c3p0' && credits >= selection.price) {
        if (autoUpgrade[btn].quantity > 5) { return alert('You Have too many C3P0\'s!') }
        autoUpgrade[btn].quantity++
        credits -= selection.price
        interval()
        update()
    } else if (btn == 'crew' && credits >= selection.price) {
        if (autoUpgrade(btn).quantity > 10) { return alert('You have too many Crews!') }
        autoUpgrade[btn].quantity++
        credits -= selection.price
        interval()
        update()
    }
}

function draw() {
    let template1;
    let template2;
    let upgrade = document.getElementById('upgrades')
    let auto = document.getElementById('auto')
    //make templates into for in loop
    template1 = `
    <h3>Upgrades</h3>
    <button class="btn btn-white" onclick="buy('blaster')">
        <p>Blaster Pistol: Price- ${clickUpgrade['blaster'].price} Multiplier- ${clickUpgrade['blaster'].multiplier} Quantity- ${clickUpgrade['blaster'].quantity}</p>
    </button>

    <button class="btn btn-white" onclick="buy('xwing')">
        <p>X Wing: Price- ${clickUpgrade['xwing'].price} Multiplier- ${clickUpgrade['xwing'].multiplier} Quantity- ${clickUpgrade['xwing'].quantity}</p>
    </button>

    <button class="btn btn-white" onclick="buy('lightsaber')">
        <p>Light Saber: Price- ${clickUpgrade['lightsaber'].price} Multiplier- ${clickUpgrade['lightsaber'].multiplier} Quantity- ${clickUpgrade['lightsaber'].quantity}</p>
    </button>

    <button class="btn btn-white" onclick="buy('milleniumfalcon')">
        <p>Millenium Falcon: Price- ${clickUpgrade['milleniumfalcon'].price} Multiplier- ${clickUpgrade['milleniumfalcon'].multiplier} Quantity- ${clickUpgrade['milleniumfalcon'].quantity}</p>
    </button>
    `
    template2 = `
    <h3>Auto Upgrades</h3>

    <button class="btn btn-white" onclick="buyAuto('r2d2')">
        <p>R2D2: Price- ${autoUpgrade['r2d2'].price} Clicks- ${autoUpgrade['r2d2'].clicks} Quantity- ${autoUpgrade['r2d2'].quantity}</p>
    </button>

    <button class="btn btn-white" onclick="buyAuto('c3p0')">
        <p>C3P0: Price- ${autoUpgrade['c3p0'].price} Clicks- ${autoUpgrade['c3p0'].clicks} Quantity- ${autoUpgrade['c3p0'].quantity}</p>
    </button>
    
    <button class="btn btn-white" onclick="buyAuto('crew')">
        <p>Crew: Price- ${autoUpgrade['crew']} Clicks- ${autoUpgrade['crew'].clicks} Quantity- ${autoUpgrade['crew'].quantity}</p>
    </button>
    `

    upgrade.innerHTML = template1
    auto.innerHTML = template2
}


function interval() {
    setInterval(everyInterval, 3000)
}

let test = 1

function everyInterval() {
    for (key in autoUpgrade) {
        let object = autoUpgrade[key]
        credits += object.quantity * object.clicks
    }
    update()
}

/**function changePlanet(planet) {
    let clicker = document.getElementById('click')
    clicker.innerHTML = `<img id="click" src="tatooine.png" width="60%" height="60%" class="img-fluid" alt="tatooine"
        onclick="mine()">
} */

draw()
update()
interval()