import { type Info } from "./types";

type UserTypeInfo = {
    user: Info;
};

const UserInfo = ({ user }: UserTypeInfo) => {
    return (
        <div style={{
            fontFamily: 'system-ui, sans-serif',
            background: '#ffffff',
            color: '#1e293b',
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '350px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            margin: '16px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', background: '#f1f5f9', color: '#64748b', padding: '4px 10px', borderRadius: '20px' }}>
                    STANDARD USER
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>ID: #{user.id}</span>
            </div>

            <h2 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: '600', color: '#0f172a' }}>{user.name}</h2>
            <p style={{ margin: '0', color: '#64748b', fontSize: '14px' }}>{user.email}</p>
        </div>
    );
};

export default UserInfo;
