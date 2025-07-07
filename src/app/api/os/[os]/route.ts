import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ os: string }> }
) {
  try {
    // Read the os.json file
    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/os.json', 'utf8');
    const osMappings = JSON.parse(fileContents);

    const { os } = await params;
    
    // Look up the corresponding Go OS
    const goOs = osMappings[os];
    
    if (goOs) {
      return new Response(goOs, {
        headers: { 'Content-Type': 'text/plain' },
      });
    } else {
      return NextResponse.json(
        { error: `Operating system '${os}' not found` },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error reading os.json:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
