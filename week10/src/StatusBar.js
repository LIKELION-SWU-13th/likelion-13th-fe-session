import useOnlineStatus  from './useOnlineStatus';

export default function SatatusBara(){
   const isOnline = useOnlineStatus();

    return <h1>{isOnline ? '온라인' : '연결 안 됨'}</h1>;
}