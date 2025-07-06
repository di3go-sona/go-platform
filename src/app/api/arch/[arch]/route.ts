import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: { arch: string } }
) {
  try {
    // Read the arch.json file
    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/arch.json', 'utf8');
    const archMappings = JSON.parse(fileContents);

    const { arch } = await params;
    
    // Look up the corresponding Go architecture
    const goArch = archMappings[arch];
    
    if (goArch) {
      return new Response(goArch, {
        headers: { 'Content-Type': 'text/plain' },
      });
    } else {
      return NextResponse.json(
        { error: `Architecture '${arch}' not found` },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error reading arch.json:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
