import { BaseException } from "../../../shared/domain/exceptions/BaseException.ts";
import { EXCEPTION_CODES } from "../../../shared/domain/exceptions/ExceptionCodes.ts";

export class CifAlreadyExistsException extends BaseException {
  constructor() {
    const message = "El CIF indicado ya está en uso";
    super(EXCEPTION_CODES.CIF_ALREADY_EXISTS, message);
  }
};
