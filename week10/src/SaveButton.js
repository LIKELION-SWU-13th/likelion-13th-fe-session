import useOnlineStatus  from './useOnlineStatus';

export default function SaveButton (){
    const isOnline = useOnlineStatus();
    function handleSaveClink(){
        console.log('진행사항 저장됨')
    }
    return  (
        <button disabled={!isOnline} onClick={handleSaveClink}>{isOnline ? '진행사항 저장' : '재 연결 중...'}</button>
    );
}