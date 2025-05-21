import { useOnlineStatus } from "./useOnllineStatus";

export default function StatusBar() {
    const isOnline = useOnlineStatus();

    return <h1>{isOnline ? '온라인' : '연결 안 됨'}</h1>;
}