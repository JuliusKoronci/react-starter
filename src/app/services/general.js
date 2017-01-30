import toastr from '../../config/modules';
import {history} from '../../config/store';

export function entityCreated(toast,redirectTo){
    toastr.success(toast);
    history.push(redirectTo);
}