<h1 align="center">Uptime Panel</h1>

<h3 align="center">Awesome Grafana panel to easily show uptime of a service/application!</h3>

<!-- Badges -->
<p align="center">
    <a href="https://github.com/users/WalshyDev/sponsorship" target="_blank">
        <img src="https://img.shields.io/badge/GitHub%20Sponsors-WalshyDev-orange.svg?style=flat-square" alt="GitHub Sponsors"/>
    </a>
    <a href="http://walshy.dev/donate" target="_blank">
        <img src="https://img.shields.io/badge/PayPal-WalshyDev-blue.svg?style=flat-square" alt="Slack"/>
    </a>
</p>

<hr/>

## Hello

This is a custom Grafana panel, it will display the time since a given timestamp. This is good to use for keeping track of how long a service/application has been up, how long since a given time or whatever else.

The panel is very easy to use and also has quite a few options to customise the simple thing.

### Usage
1. Add a panel
2. Pick this under "Visualisation"
3. Add a query returning a unix timestamp
4. ???
5. Profit

### Options
**Provided Timestamp Format**\
[Milliseconds, Seconds]\
This specifies if the given timestamp is in seconds or milliseconds. This is used to calculte the time so make sure it's the right one!

**Uptime Format**\
[Long Form, Short Form]\
This specifies if the time displayed should be in short form (e.g 1h 5m 20s) or long form (e.g 1 hour 5 minutes 20 seconds).

**Pad 0s To The Time**\
[true, false]\
This specifies if a `0` should be added to values lower than 10. For example: `09 minutes` rather than `9 minutes`.

**Text Size (CSS font-size property)**\
[*2em*]\
This specifies the `font-size` of the text. This is used in the CSS so it accepts anything which can be used in CSS, px, em, %, etc.

### Download
You can download this panel from the [releases page](https://github.com/WalshyDev/Uptime-Panel/releases).

## Contributing

Contributions are always welcome to this project!  
Take a look at any existing issues on this repository for starting places to help contribute towards, or simply create your own new contribution to the project.

Please make sure to follow the existing standards within the project such as code styles, naming conventions and commenting/documentation.

When you are ready, simply create a pull request for your contribution and I will review it whenever I can!

### Donating

You can also help me and the project out by sponsoring me through [GitHub Sponsors](https://github.com/users/WalshyDev/sponsorship) or by donating on [PayPal](https://walshy.dev/donate).
<p>
    <a href="https://github.com/users/WalshyDev/sponsorship" target="_blank">
        <img src="https://img.shields.io/badge/GitHub%20Sponsors-WalshyDev-orange.svg?style=flat-square" alt="GitHub Sponsors"/>
    </a>
    <a href="http://walshy.dev/donate" target="_blank">
        <img src="https://img.shields.io/badge/PayPal-WalshyDev-blue.svg?style=flat-square" alt="Slack"/>
    </a>
</p>