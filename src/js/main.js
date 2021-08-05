import './vendor';
import './helpers';
import './components/social';
import './components/roundslider.min';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

$(".rslider").roundSlider({
	sliderType: "min-range",
	editableTooltip: false,
	radius: 125,
	width: 68,
	value: 750,
	handleSize: 0,
	handleShape: "square",
	circleShape: "half-top",
	startAngle: 315,
	tooltipFormat: "changeTooltip",
	min: 0,
	max: 1000,
});

