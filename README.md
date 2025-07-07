# Go Platform API

A Next.js API service that provides Go cross-compilation platform mappings from system architecture and OS names to their corresponding `GOOS` and `GOARCH` values.

## Features

- **Architecture API**: `/api/arch/{arch}` - Convert system architecture names to Go `GOARCH` values
- **OS API**: `/api/os/{os}` - Convert system OS names to Go `GOOS` values
- **Plain text responses** - Perfect for shell scripts and automation
- **Interactive web interface** - Copy commands with one click
- **Comprehensive mappings** - Supports all major architectures and operating systems

## API Endpoints

### Architecture Mapping
```bash
# Get Go architecture for current system
curl /api/arch/$(uname -m)

# Examples
curl /api/arch/x86_64    # Returns: amd64
curl /api/arch/aarch64   # Returns: arm64
curl /api/arch/armv7     # Returns: arm
```

### OS Mapping
```bash
# Get Go OS for current system
curl /api/os/$(uname -s)

# Examples
curl /api/os/Linux   # Returns: linux
curl /api/os/Darwin  # Returns: darwin
curl /api/os/FreeBSD # Returns: freebsd
```

## Quick Start

### Set environment variables for cross-compilation:
```bash
# Set GOOS and GOARCH from current system
GOOS=$(curl -sf /api/os/$(uname -s))
GOARCH=$(curl -sf /api/arch/$(uname -m))

# One-liner for building
GOOS=$(curl -sf /api/os/$(uname -s)) GOARCH=$(curl -sf /api/arch/$(uname -m)) go build
```

## Supported Mappings

### Architectures
- **x86**: `x86_64`, `amd64`, `i386`, `i686` → `amd64`, `386`
- **ARM**: `armv7`, `armv8`, `aarch64`, `arm64` → `arm`, `arm64`
- **Others**: `riscv64`, `mips`, `ppc64le`, `s390x`, `loongarch64`, `sparc64`

### Operating Systems
- **Unix-like**: `Linux`, `Darwin`, `FreeBSD`, `OpenBSD`, `NetBSD`, `DragonFly`
- **Others**: `SunOS` (Solaris), `AIX`

## Development

### Installation
```bash
pnpm install
```

### Run locally
```bash
pnpm dev
```

### Build for production
```bash
pnpm build
pnpm start
```

## Usage Examples

### Shell Script
```bash
#!/bin/bash
GOOS=$(curl -sf /api/os/$(uname -s))
GOARCH=$(curl -sf /api/arch/$(uname -m))

if [ $? -eq 0 ]; then
    echo "Building for GOOS=$GOOS GOARCH=$GOARCH"
    GOOS=$GOOS GOARCH=$GOARCH go build -o myapp-$GOOS-$GOARCH
else
    echo "Failed to determine Go platform"
    exit 1
fi
```

### Makefile
```makefile
BINARY_NAME=myapp

detect-platform:
	@GOARCH=$$(curl -sf /api/arch/$$(uname -m)) && \
	GOOS=$$(curl -sf /api/os/$$(uname -s)) && \
	echo "GOOS=$$GOOS GOARCH=$$GOARCH"

build-current:
	@GOARCH=$$(curl -sf /api/arch/$$(uname -m)) && \
	GOOS=$$(curl -sf /api/os/$$(uname -s)) && \
	GOOS=$$GOOS GOARCH=$$GOARCH go build -o $(BINARY_NAME)-$$GOOS-$$GOARCH
```

## Tech Stack

- **Next.js 15** - App Router with server-side API routes
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Neobrutalism Design** - Bold, modern UI

## API Response Format

All API endpoints return plain text responses for easy shell integration:

```bash
# Success - returns just the value
$ curl /api/arch/x86_64
amd64

# Error - returns JSON with 404/500 status
$ curl /api/arch/invalid
{"error":"Architecture 'invalid' not found"}
```
