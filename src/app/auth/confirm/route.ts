import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '~/lib/utils/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tokenHash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = searchParams.get('next') ?? '/';

  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete('token_hash');
  redirectTo.searchParams.delete('type');

  if (tokenHash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });

    if (error) {
      redirectTo.pathname = '/auth/error';
      redirectTo.searchParams.set('error', error.message);
    } else {
      redirectTo.pathname = '/account';
      redirectTo.searchParams.delete('next');
    }
  } else {
    redirectTo.pathname = '/auth/error';
    redirectTo.searchParams.set('error', 'Invalid token_hash or type provided');
  }

  return NextResponse.redirect(redirectTo);
}
