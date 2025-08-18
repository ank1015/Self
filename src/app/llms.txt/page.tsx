
const content = `# ank1015.com

> A minimal portfolio of a software developer and researcher obsessed with building AI applications.

## Blog

`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
