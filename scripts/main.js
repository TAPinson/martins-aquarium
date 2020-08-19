// import useFish from a seperate js page. Location is relative to the location of this page.
import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js';


// This will give the result of useFish as the variable allTheFish
const allTheFish = useFish();
//console.log("all the fish", allTheFish);
FishList();



// import useTip from a seperate js page.
import { useTip } from './tips/TipDataProvider.js';
const allTheTips = useTip();




import { proTip } from './tips/Tip.js';
import { tipList } from './tips/TipList.js';


tipList();