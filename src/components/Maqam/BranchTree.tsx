import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Branch } from '../../types/music';
import { ChevronLeft, ChevronDown, GitBranch } from 'lucide-react';

interface BranchTreeProps {
  branches: Branch[];
  mainMaqamName: string;
  mainMaqamId: string;
}

interface TreeNode {
  name: string;
  branch?: Branch;
  children?: TreeNode[];
}

export default function BranchTree({ branches, mainMaqamName, mainMaqamId }: BranchTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (name: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(name)) {
      newExpanded.delete(name);
    } else {
      newExpanded.add(name);
    }
    setExpandedNodes(newExpanded);
  };

  // Build tree structure
  const treeData: TreeNode[] = [
    {
      name: mainMaqamName,
      children: branches.map(b => ({ name: b.name, branch: b }))
    }
  ];

  const renderNode = (node: TreeNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.name);

    return (
      <div key={node.name} className={`${level > 0 ? 'mr-6 mt-2' : ''}`}>
        <div
          className={`
            flex items-center gap-3 p-3 rounded-xl cursor-pointer
            transition-all hover:bg-[#1a1a24]
            ${level === 0 ? 'bg-gradient-to-l from-[#D4AF37]/10 to-transparent' : 'bg-[#111118]'}
          `}
          onClick={() => hasChildren && toggleNode(node.name)}
        >
          {hasChildren && (
            <ChevronDown
              size={16}
              className={`text-[#71717a] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          )}
          {!hasChildren && <GitBranch size={16} className="text-[#71717a]" />}

          <span className={`font-medium ${level === 0 ? 'text-[#D4AF37]' : 'text-[#a1a1aa]'}`}>
            {node.name}
          </span>

          {level === 0 && (
            <span className="text-xs text-[#71717a] mr-auto">الجذر</span>
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="mt-2 border-r-2 border-[#1f1f2e]">
            {node.children!.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card p-6">
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <GitBranch size={20} className="text-[#D4AF37]" />
        شجرة الفروع
      </h4>

      <div className="space-y-2">
        {/* Main maqam node */}
        <div className="p-4 bg-gradient-to-l from-[#D4AF37]/10 to-transparent rounded-xl border border-[#D4AF37]/20">
          <Link
            to={`/maqam/${mainMaqamId}`}
            className="flex items-center justify-between"
          >
            <div>
              <h5 className="font-bold text-[#D4AF37] text-lg">{mainMaqamName}</h5>
              <p className="text-sm text-[#71717a]">المقام الرئيسي</p>
            </div>
            <ChevronLeft className="text-[#D4AF37]" size={20} />
          </Link>
        </div>

        {/* Branches */}
        {branches.length > 0 && (
          <>
            <div className="text-sm text-[#71717a] py-2">الفروع:</div>
            <div className="space-y-2 pr-4 border-r-2 border-[#1f1f2e]">
              {branches.map((branch, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#111118] rounded-xl hover:bg-[#1a1a24] transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-[#a1a1aa]">{branch.name}</h6>
                    <p className="text-xs text-[#71717a]">{branch.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {branches.length === 0 && (
          <div className="text-center py-8 text-[#71717a]">
            <p>لا توجد فروع فرعية لهذا المقام</p>
          </div>
        )}
      </div>
    </div>
  );
}