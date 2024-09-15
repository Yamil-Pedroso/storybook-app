import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gutyuexslgkmaydrcaqn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dHl1ZXhzbGdrbWF5ZHJjYXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTEzMzcsImV4cCI6MjAwOTM4NzMzN30.A0KkYUFZ2D3L9DOmNIrUqjUBADyIKfDbFhEwSjo4gzY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
