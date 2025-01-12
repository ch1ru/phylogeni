import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '~/lib/utils/supabase/server';

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL('/auth/sign-in', req.url), {
    status: 302,
  });
}
