import { type MoreInfo } from "./types";

type MoreInfoTypeProp = {
    admin: MoreInfo;
};

const AdminInfo = ({ admin }: MoreInfoTypeProp) => {
    return (
        <div style={{
            fontFamily: 'system-ui, sans-serif',
            background: '#1e293b',
            color: '#f8fafc',
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '350px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
            border: '1px solid #334155',
            margin: '16px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', background: '#8b5cf6', padding: '4px 10px', borderRadius: '20px' }}>
                    {admin.role}
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>ID: #{admin.id}</span>
            </div>

            <h2 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: '600' }}>{admin.name}</h2>
            <p style={{ margin: '0 0 20px 0', color: '#94a3b8', fontSize: '14px' }}>{admin.email}</p>

            <div style={{ borderTop: '1px solid #334155', paddingTop: '12px', fontSize: '12px', color: '#cbd5e1' }}>
                <strong>Last Login:</strong> {admin.lastLogin.toLocaleDateString()}
            </div>
        </div>
    );
};

export default AdminInfo;
