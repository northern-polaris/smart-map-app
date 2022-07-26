import { HttpParams } from '@angular/common/http';

export function generateHttpParams(params: { [key: string]: any }): HttpParams {
  return new HttpParams({ fromObject: params });
}
