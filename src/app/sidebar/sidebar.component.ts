import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'angular-tree-component';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
      private applicationService:ApplicationService
  ) { }

  ngOnInit() {

  }


  nodes = [
    {
      id: 1,
      name: 'Sentient Energy',
      isExpanded: true,
      children: [
        { id: 2, name: '> Los Rack' },
        { id: 3, name: '> New Yark' },
        { id: 4, name: '> New Yark1' },
        { id: 5, name: '> New Region' },
        { id: 6, name: '> Nor Col' },
        { id: 7, name: '> Nor Cal 1' },
        { id: 8, name: '> South America' },
        { id: 9, name: 'USA',
         children: [
            { id: 10, name: 'Northern California',
                children: [
                  { id: 11, name: 'San Francisco',
                    children: [
                    { id: 12, name: '> Golden Gate' },
                    { id: 13, name: '> Lubayanka So...' },
                  ]
                  }
                ]
            }
          ]
        },
      ]
    },
    {
      id: 14,
      name: 'Custom Groups',
      children: [
        { }
      ]
    }
  ];

  filterFn(value, treeModel: TreeModel) {
    treeModel.filterNodes((node) => fuzzysearch(value, node.data.name));
  }
}


function fuzzysearch (needle, haystack) {
  const haystackLC = haystack.toLowerCase();
  const needleLC = needle.toLowerCase();

  const hlen = haystack.length;
  const nlen = needleLC.length;

  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needleLC === haystackLC;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    const nch = needleLC.charCodeAt(i);

    while (j < hlen) {
      if (haystackLC.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;


}
