import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userData from '../data/user';
import statsData from '../data/data';
import friendsData from '../data/friends';
import transactionsData from '../data/transactions';

export const App = () => {
  return (
    <>
      <Profile data={userData} />;
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
};
