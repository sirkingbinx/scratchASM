#ifndef FUTILS_H__
#define FUTILS_H__

#if defined(__has_include) && __has_include(<libgen.h>)
#include <libgen.h>

char* getfname(char* fname) {
    return basename(fname);
}
#else
char* getfname(char* fname) {
    char *filename = strrchr(fname, '\\'); 

    if (filename == NULL) {
        filename = strrchr(fname, '/'); 

        if (filename == NULL) {
            filename = (char *)fname;
        } else {
            filename++;
        }
    } else {
        filename++;
    }

    return filename;
}
#endif

#endif