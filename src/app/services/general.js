import toastr from '../../config/modules';
import { history } from '../../config/store';



export function sort_by(field, reverse, primer){

    const key = primer ?
        function(x) {return primer(x[field])} :
        function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}



export function convertDateToApiString(date){


    let parsedDate = Date.parse(date);
	date=new Date(parsedDate);

    if(date !== "Invalid Date" && !isNaN(date)){

        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = hours > 9 ? hours : '0' + hours;
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = seconds > 9 ? seconds : '0' + seconds;
        month = month > 9 ? month : '0' + month;
        day = day > 9 ? day : '0' + day;

        let string = date.getFullYear() + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '+01:00';

        return string;
    }
    return '';
}


export function convertApiStringToDate(string){

    string=string.replace('FROM=','');
    string=string.replace('TO=','');
	let date=string.split('T')[0];

    return date;
}



export function entityCreated(toast, redirectTo) {
	toastr.success(toast);
	if (redirectTo) {
		history.push(redirectTo);
	}
}

export function entityDeleted(toast, redirectTo) {
	toastr.success(toast);
	if (redirectTo) {
		history.push(redirectTo);
	}
}

export function entityUpdated(toast,redirectTo) {
	toastr.success(toast);
    if (redirectTo) {
        history.push(redirectTo);
    }
}

export function entityReceived(toast) {
	toastr.success(toast);
}
export function entityError(toast) {
	toastr.error(toast);
}


export function encode(obj) {
	let str = "";
	let seperator = "";
	for (let key in obj) {

		if (typeof obj[key] !== 'undefined') {
			str += seperator;
			// str += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
			str += key + "=" + obj[key];
			seperator = "&";
		}
	}
	return str;
}


export function remapValues(formValues, remap) {
	let remappedValues = {};
	for (let k in remap) {
		let formValue = eval('formValues.' + k);
		if (typeof formValue !== 'undefined') {
			if (remap.hasOwnProperty(k)) {
				remappedValues[remap[k]] = formValue;
			} else {
				remappedValues[k] = formValue;
			}
		}
	}
	return remappedValues;
}


export function filterFormValues(formValues, allowedKeys) {
	// let clonedFormValues = Object.assign({}, formValues);
	// let allowedValues={};
	//
	// allowedKeys.map((field, i) => {
	//     let value;
	//     try {
	//
	//         //field.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
	//
	//         value = eval('formValues.' + field);
	//         // console.log(field, value);
	//         // allowedValues.field=value;
	//         setObjByString(allowedValues,field,value);
	//         //index(allowedValues,field,value);
	//
	//     } catch (e) {
	//     }
	//
	// });
	// // Object.keys(allowedValues).map(x => allowedValues[x]);
	// // console.log(allowedValues);
	//
	// allowedValues.detailData = Object.values(allowedValues.detailData);
	// // console.log(allowedValues);
	//
	// return allowedValues;

	//povodne
	let clonedFormValues = Object.assign({}, formValues);
	return allowedKeys.reduce((a, b) => {
		a[b] = clonedFormValues[b];
		return a
	}, {});
}


export function setObjByString(obj, str, val) {
	let keys, key;
	//make sure str is a string with length
	if (!str || !str.length || Object.prototype.toString.call(str) !== "[object String]") {
		return false;
	}
	if (obj !== Object(obj)) {
		//if it's not an object, make it one
		obj = {};
	}
	keys = str.split(".");
	while (keys.length > 1) {
		key = keys.shift();
		if (obj !== Object(obj)) {
			//if it's not an object, make it one
			obj = {};
		}
		if (!(key in obj)) {
			//if obj doesn't contain the key, add it and set it to an empty object
			obj[key] = {};
		}
		obj = obj[key];
	}
	return obj[keys[0]] = val;
}


export function stripEmptyValues(values, stripOnlyKeys, dontStripKeys) {
    if (values) {
        // let newValues = {};
        let newValues = Object.assign({},values);
        let removeValues = [];

        if(stripOnlyKeys && stripOnlyKeys.length>0){

        	stripOnlyKeys.map((key) => {
                if (newValues.hasOwnProperty(key) && typeof newValues[key] !== 'undefined' && newValues[key] !== '') {
                    // newValues[key] = values[key];
                }else{
					removeValues.push(key);
				}
            });

		}else{

            Object.keys(newValues).map((key) => {

                if (newValues.hasOwnProperty(key) && typeof newValues[key] !== 'undefined' && newValues[key] !== '') {
                    // newValues[key] = values[key];
                }else{

                    removeValues.push(key);
                    //
                    // if(dontStripKeys && typeof dontStripKeys[key] !== "undefined"){
						// // console.log('dont strip '+key)
                    // }else {
                    //     // console.log('strip '+key)
                    //     removeValues.push(key);
                    // }
                }
            });
		}

        removeValues.map(key=>{
            delete newValues[key];
        });

        values = newValues;
    }
    return values;
}