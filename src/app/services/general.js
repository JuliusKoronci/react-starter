import toastr from '../../config/modules';
import {history} from '../../config/store';

export function entityCreated(toast,redirectTo){
    toastr.success(toast);
    if(redirectTo) {
        history.push(redirectTo);
    }
}

export function entityDeleted(toast,redirectTo){
    toastr.success(toast);
    if(redirectTo) {
        history.push(redirectTo);
    }
}

export function entityUpdated(toast){
    toastr.success(toast);
}

export function entityReceived(toast){
    toastr.success(toast);
}