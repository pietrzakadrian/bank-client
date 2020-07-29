import { LoginPageState } from 'app/containers/LoginPage/types';
import { AppState } from 'app/containers/App/types';
import { ErrorState } from 'app/providers/ErrorProvider/types';
import { LoadingState } from 'app/providers/LoadingProvider/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  loginPage?: LoginPageState;
  global: AppState;
  loading: LoadingState;
  error: ErrorState;

  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
