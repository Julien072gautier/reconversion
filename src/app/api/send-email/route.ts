import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, text } = await request.json();

    // Validation des données
    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      );
    }

    // Pour l'instant, on simule l'envoi d'email
    // Dans un environnement de production, vous devriez utiliser un service comme:
    // - Nodemailer avec SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - etc.

    console.log('Email à envoyer:', {
      to,
      subject,
      text,
      timestamp: new Date().toISOString()
    });

    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Retourner une réponse de succès
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email envoyé avec succès',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}

