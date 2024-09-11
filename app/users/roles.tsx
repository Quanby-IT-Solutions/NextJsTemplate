import { createClient } from '@/utils/supabase/server';

export default async function Roles() {
    const supabase = createClient();
    const { data: roles } = await supabase.from("roles").select();

    return <pre>{JSON.stringify(roles, null, 2)}</pre>
}