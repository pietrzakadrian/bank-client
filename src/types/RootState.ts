import { RouterState } from 'connected-react-router';
import { LoginPageState } from 'app/containers/LoginPage/types';
import { AppState } from 'app/containers/App/types';
import { ErrorState } from 'app/providers/ErrorProvider/types';
import { LoadingState } from 'app/providers/LoadingProvider/types';
import { RegistrationPageState } from 'app/containers/RegistrationPage/types';
import { DashboardPageState } from 'app/containers/DashboardPage/types';
import { LanguageState } from 'app/providers/LanguageProvider/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  router?: RouterState;
  loginPage?: LoginPageState;
  global?: AppState;
  loading?: LoadingState;
  language?: LanguageState;
  error?: ErrorState;
  registrationPage?: RegistrationPageState;
  dashboardPage?: DashboardPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
