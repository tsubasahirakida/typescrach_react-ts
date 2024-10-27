import * as React from 'react';
import './Header.css';

// propsという型を作成。
// React.ReactElement型のchildrenというpropsのみ受け取る
type Props = {
  children: React.ReactElement;
}

const Header: React.FC<Props> = ({children}) => {
 return (
   <>
     <div className="Header">
       <span className="Header__Logo">
         TypeScrash
       </span>
       {children}
     </div>
   </>
 );
};

export default Header;
